from uuid import UUID


class ValidationService:
    @staticmethod
    def checkUUID(uuid):
        try:
            UUID(uuid)  # checking if id is a valid uuid
            return True
        except ValueError:
            return False

    @staticmethod
    def checkNumerical(parameter):
        if type(parameter) == int or type(parameter) == float:
            return True
        else:
            return False
