from .schema import User
from foundation.core.api.helper import make_error
from flask import request, session, Response
import json

import logging as logger


def __setup__(module):
    module.resource("users", User)

    @module.endpoint("/signup", methods=["POST"])
    def register():
        data = request.json or request.form.to_dict()
        database = module.data.db
        if database.user.find_one({"email": data.get("email")}) is not None:
            return make_error(200, description="email is exist")
        model = User(data)
        model.save()
        data_response = {
            "status": 200,
            "description": "ok",
            "userID": data["userID"],
            "isSuccess": True
        }
        return Response(response=json.dumps(data_response), status=200, content_type='application/json')

    @module.endpoint("/signin", methods=["POST"])
    def login():
        dt = request.json or request.form.to_dict()
        database = module.data.db

        if database.user.find_one({"email": dt.get("email")}) is None:
            return make_error(200, description="Email is wrong")
        if database.user.find_one({"password": dt.get("password")}) is None:
            return make_error(200, description="password is wrong")

        session["userID"] = module.data.db.user.find_one(
            {"email": dt.get("email")})["userID"]
        logger.warning("Session %r", session)
        data_response = {
            "status": 200,
            "description": "ok",
            "userID": session["userID"],
            "isSuccess": True
        }
        return Response(response=json.dumps(data_response), status=200, content_type='application/json')

    @module.endpoint("/logout", methods=["GET"])
    def logout():
        session.clear()
        data_response = {
            "status": 200,
            "description": "ok"
        }
        return Response(response=json.dumps(data_response), status=200, content_type='application/json')
