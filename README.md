# Book catallog server


Live Link: [https://book-catallog-server-assignment.vercel.app](https://book-catallog-server-assignment.vercel.app)

## Table of Contents

- [Application Routes](#application-routes)
  - [User](#user)
  - [Category](#category)
  - [Books](#books)
  - [Orders](#orders)

## Application Routes

### User

- `POST /api/v1/auth/signup`: Create a new user.
- `POST /api/v1/auth/signin`: Login user.
- `GET /api/v1/users`: Get a list of all users.
- `GET /api/v1/users/ead25ebb-323f-4f08-afaa-89cc5e4933fd`: Get a single user by ID.
- `PATCH /api/v1/users/ead25ebb-323f-4f08-afaa-89cc5e4933fd`: Update a user by ID.
- `DELETE /api/v1/users/ead25ebb-323f-4f08-afaa-89cc5e4933fd`: Delete a user by ID.
- `GET /api/v1/profile`: Get the user's profile.

### Category

- `POST /api/v1/categories/create-category`: Create a new category.
- `GET /api/v1/categories`: Get a list of all categories.
- `GET /api/v1/categories/e7c450bd-380a-4a9a-9f53-290284027314`: Get a single category by ID.
- `PATCH /api/v1/categories/e7c450bd-380a-4a9a-9f53-290284027314`: Update a category by ID.
- `DELETE /api/v1/categories/e7c450bd-380a-4a9a-9f53-290284027314`: Delete a category by ID.

### Books

- `POST /api/v1/books/create-book`: Create a new book.
- `GET /api/v1/books`: Get a list of all books.
- `GET /api/v1/books/e7c450bd-380a-4a9a-9f53-290284027314/category`: Get all books in a specific category by category ID.
- `GET /api/v1/books/c412a307-0417-4395-bf9a-93af92fab539`: Get a single book by ID.
- `PATCH /api/v1/books/c412a307-0417-4395-bf9a-93af92fab539`: Update a book by ID.
- `DELETE /api/v1/books/c412a307-0417-4395-bf9a-93af92fab539`: Delete a book by ID.

### Orders

- `POST /api/v1/orders/create-order`: Create a new order.
- `GET /api/v1/orders`: Get a list of all orders.
- `GET /api/v1/orders/ed02145a-ad06-4d22-9f89-937e43f0d4d8`: Get a single order by order ID.
