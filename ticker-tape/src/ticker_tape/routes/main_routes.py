# ticker-tape/src/ticker_tape/routes/main_routes.py
import logging
from apiflask import APIBlueprint
from flask import render_template, redirect, url_for, flash

main_bp = APIBlueprint("main", __name__)


@main_bp.route("/", methods=["GET", "POST"])
def index():
    logging.info("Rendering the main page.")
    return render_template("index.html")