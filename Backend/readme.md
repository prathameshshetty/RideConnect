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



# /Users/login Endpoint Documentation

## Description

This endpoint allows an existing user to log in by providing their email and password. Upon successful authentication, a JWT token is returned.

## URL

`POST /login`

## Required Data

- **email**: Must be a valid email address.
- **password**: Must be at least 6 characters long.

### Request Body Example

```json
{
  "email": "john.doe@example.com",
  "password": "securePass123"
}
```

## Response

### Success

- **Status Code**: 200
- **Body**: JSON containing a JWT token and the authenticated user object.

```json
{
  "token": "jwt_token_here",
  "user": {
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

- **Status Code**: 401
- **Error Body Example**:

```json
{
  "message": "Invalid email or password"
}
```

## Notes

- The endpoint validates the input data using express-validator.
- The password is compared with the hashed password stored in the database.
- A JWT token is created and returned upon successful authentication.


# /Users/profile Endpoint Documentation

## Description

This endpoint retrieves the profile of the currently authenticated user. The user must be logged in and provide a valid JWT token.

## URL

`GET /profile`

## Headers

- **Authorization**: Bearer `<JWT_TOKEN>` (if not using cookies).

## Response

### Success

- **Status Code**: 200
- **Body**: JSON containing the user's profile information.

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
  // ...other user properties...
}
```

### Error

- **Status Code**: 401
- **Error Body Example**:

```json
{
  "message": "Unauthorized"
}
```

## Notes

- The endpoint uses middleware to authenticate the user before retrieving their profile.
- The JWT token is verified, and the user's information is fetched from the database.

---

# /Users/logout Endpoint Documentation

## Description

This endpoint logs out the currently authenticated user by clearing their authentication token and blacklisting it.

## URL

`GET /logout`

## Headers

- **Authorization**: Bearer `<JWT_TOKEN>` (if not using cookies).

## Response

### Success

- **Status Code**: 200
- **Body**: JSON confirming the user has been logged out.

```json
{
  "message": "Logged out"
}
```

### Error

- **Status Code**: 401
- **Error Body Example**:

```json
{
  "message": "Unauthorized"
}
```

## Notes

- The endpoint clears the authentication token from cookies (if used).
- The token is added to a blacklist to prevent further use.
- The user must be authenticated to access this endpoint.