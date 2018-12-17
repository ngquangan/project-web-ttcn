MODULES = [
]

MONGO_HOST = "mongodb"
MONGO_PORT = "27017"
MONGO_DB = "nvphu1306"
MONGO_USER = "nvphu1306"
MONGO_PASSWORD = "nvphu1306"

SWAGGER_INFO = {
    'title': 'My Supercool API',
    'version': '1.0',
    'contact': {
        'name': 'Marsch Huynh',
    },
    'license': {
        'name': 'BSD',
        'url': 'https://github.com/pyeve/eve-swagger/blob/master/LICENSE',
    },
    'schemes': ['http', 'https'],
}

SWAGGER_HOST = '6bf126f3.ngrok.io'

X_DOMAINS = ['http://localhost:5000',  # The domain where Swagger UI is running
             'http://editor.swagger.io',
             'https://petstore.swagger.io']

X_HEADERS = ['Content-Type', 'If-Match']  # Needed for the "Try it out" buttons

AUTH_FIELD = "auth"


MQTT_BROKER_URL = 'mqtt'  # use the free broker from HIVEMQ
MQTT_BROKER_PORT = 1883  # default port for non-tls connection
MQTT_USERNAME = ''  # set the username here if you need authentication for the broker
MQTT_PASSWORD = ''  # set the password here if the broker demands authentication
MQTT_KEEPALIVE = 5  # set the time interval for sending a ping to the broker to 5 seconds
MQTT_TLS_ENABLED = False  # set TLS to disabled for testing purposes
