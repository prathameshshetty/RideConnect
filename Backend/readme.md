# /Users/register Endpoint Documentation

## Description

This endpoint allows the registration of a new user. It requires valid email, first name, and a password. Optionally, the last name can be provided.

## URL

`POST /register`

## Required Data

- **email**: Must be a valid email address.
- **fullname.firstname**: First name (minimum 3 characters).
- **fullname.lastname**: (Optional) Last name (minimum 3 characters if provided).
- **password**: Must be at least 6 characters long.

### Request Body Example

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePass123"
}
```

## Response

### Success

- **Status Code**: 200
- **Body**: JSON containing a JWT token and the created user object.

```json
{
  "token": "jwt_token_here",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // ...other user properties...
  }
}
```

### Error

- **Status Code**: 400
- **Error Body Example**:

```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email"
      // ...other error info...
    }
  ]
}
```

## Notes

- The endpoint validates the input data using express-validator.
- The password is hashed before saving the user.
- A JWT token is created and returned upon successful registration.
