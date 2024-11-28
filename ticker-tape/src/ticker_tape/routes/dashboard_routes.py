# ticker-tape/src/ticker_tape/routes/dashboard_routes.py
import execjs
import json
import logging
from apiflask import APIBlueprint
from flask import render_template, request, jsonify, redirect, url_for
from forms import DashboardForm
from models import Dashboard
from utils.db_utils import db
# from workflows import dashboard_workflow


dashboard_bp = APIBlueprint("dashboard", __name__)

# New Dashboard
@dashboard_bp.route('/new', methods=["GET", "POST"])
def new_dashboard():
    form = DashboardForm()
    if form.validate_on_submit():
        new_dashboard = Dashboard(title=form.title.data, description=form.description.data, code=form.code.data)
        db.session.add(new_dashboard)
        db.session.commit()
        return redirect(url_for('dashboard.list_dashboards'))
    return render_template('dashboard/new_dashboard.html', form=form)


# Create a Dashboard
@dashboard_bp.route("/", methods=["POST"])
def create_dashboard():
    data = request.json
    new_dashboard = Dashboard(title=data["title"])
    db.session.add(new_dashboard)
    db.session.commit()
    return jsonify({"id": new_dashboard.id, "title": new_dashboard.title, "description": new_dashboard.description, "code": new_dashboard.code}), 201


# List all Dashboards
@dashboard_bp.route('/')
def list_dashboards():
   dashboards = Dashboard.query.all()
   return render_template('dashboard/dashboards.html', dashboards=dashboards)


# # Read all Dashboards
# @dashboard_bp.route("/", methods=["GET"])
# def get_dashboards():
#     dashboards = Dashboard.query.all()
#     return jsonify([{"id": dashboard.id, "title": dashboard.title} for dashboard in dashboards]), 200


# Read a single Dashboard by ID
@dashboard_bp.route("/<int:dashboard_id>", methods=["GET"])
def get_dashboard(dashboard_id):
    dashboard = Dashboard.query.get_or_404(dashboard_id)
    return jsonify({"dashboard_id": dashboard.id, "title": dashboard.title, "description": dashboard.description, "code": dashboard.code}), 200


# Update a Dashboard by ID
@dashboard_bp.route("/<int:dashboard_id>", methods=["PUT"])
def update_dashboard(dashboard_id):
    dashboard = Dashboard.query.get_or_404(dashboard_id)
    data = request.json
    dashboard.title = data["title"]
    db.session.commit()
    return jsonify({"dashboard_id": dashboard.id, "title": dashboard.title, "description": dashboard.description, "code": dashboard.code}), 200


# Delete a Dashboard by ID
@dashboard_bp.route("/<int:dashboard_id>", methods=["DELETE"])
def delete_dashboard(dashboard_id):
    dashboard = Dashboard.query.get_or_404(dashboard_id)
    db.session.delete(dashboard)
    db.session.commit()
    # return jsonify({"message": "Dashboard deleted successfully."}), 204
    return redirect(url_for("dashboard.list_dashboards"))


# Edit a Dashboard
@dashboard_bp.route("/<int:dashboard_id>/edit", methods=["GET", "POST"])
def edit_dashboard(dashboard_id):
    dashboard = Dashboard.query.get_or_404(dashboard_id)
    form = DashboardForm(obj=dashboard)
    if form.validate_on_submit():
        dashboard.title = form.title.data
        dashboard.description = form.description.data
        dashboard.code = form.code.data
        db.session.commit()
        # flash("Dashboard updated successfully!", "success")
        return redirect(url_for("dashboard.list_dashboards"))
    return render_template("dashboard/edit_dashboard.html", form=form, dashboard=dashboard)


# View a Dashboard
@dashboard_bp.route("/<int:dashboard_id>/view", methods=["GET"])
def view_dashboard(dashboard_id):
    dashboard = Dashboard.query.get_or_404(dashboard_id)
    return render_template("dashboard/view_dashboard.html", dashboard=dashboard)

# # Run a Build
# @build_bp.route("/run-build", methods=["POST"])
# def run_build():
#     logging.info("Received request to run the Build's workflow.")
#     try:
#         data = json.loads(request.data)
#         yaml_result = build_workflow()
#         print(f"yaml_result: ", {yaml_result})
#         json_result = json.dumps(yaml_result) # json.dump() needs a file, json.dumps() does not
#         print(f"json_result: ", {json_result})
#         return json_result, 200
#     except Exception as e:
#         logging.error(f"Error occurred while running the workflow: {e}")
#         return {"error": "An error occurred while processing your request."}, 500


# # Execute Code
# @build_bp.route("/execute-code", methods=["POST"])
# def execute_code():
#     logging.info("Received request to run the Build's execute code workflow.")
#     try:
#         code = request.json.get('code')
#         # Execute the code using execjs (support for Javascript execution)
#         context = execjs.compile(code)
#         print("code: ", code) # For testing purposes only! NOW DO SOMETHING WITH THIS code IN YOUR FLOWS !
#         result = context.call('main') # Assuming main is the entry function
#         return jsonify({"result": result}), 200
#     except Exception as e:
#         logging.error(e)
#         return {"error": "An error occured while processing your request."}    