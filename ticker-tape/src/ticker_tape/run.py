from templates import app
#Load this config object for development mode
from config import DevelopmentConfig as config # DevelopmentConfig | ProductionConfig
app.config.from_object(config)
app.run()