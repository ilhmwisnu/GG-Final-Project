# GG 3.0 Fullstack Mid Term - ilhmwisnu

## Database Structure
1. Videos Collection
    - img_url : String (URL of the video thumbnail)
    - title : String (Title of the video)
    - video_url : String (URL of the video)
2. Products Collection
    - video_id : ObjectId (Identifier of this product's video )
    - product_link : String (URL of the product)
    - title : String (Title of the product)
    - price : Number (Price of the product)
    - img_url : String (Image URL of the product)
3. Comments Collection
    - video_id : ObjectId (Identifier of this comment's video )
    - username : String (Username of the comment writer)
    - comment : String (Content of the comment)
    - created_at : Date (Date when the comment is created)

## API Structure
1. `GET /video` : Get all videos.
2. `GET /video?keyword={title}` : Search a video by its title.
3. `GET /video/:id` : Get a video by its Id.
4. `GET /video/:id/product` : Get all products of a video.
5. `GET /video/:id/comment` : Get all comments of a video.
6. `POST /video/:id/comment` : Add new comment to a video

## List API request and response

### **GET /video**  
  Returns all videos.
* **URL Params**  
  None
* **URL Query**  
  keyword=[String]
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**   
  **Code:** 200  
  **Content:**  
  ```
  {
      "message": "Success get data",
      "data": [
          { <video_object> },
          { <video_object> },
          { <video_object> },
          ...
      ]
  }
  ```


### **GET /video/:id**  
  Returns the specified video.
* **URL Params**  
  *Required:* id=[String] 
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
  **Code:** 200  
  **Content:** 
  ```
  {
      "message": "Success get data",
      "data": { <video_object> }
  }
  ``` 

### **GET /video/:id/product**  
  Returns all products for the specified video.
* **URL Params**  
  *Required:* id=[String] 
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
  **Code:** 200  
  **Content:** 
  ```
  {
      "message": "Success get data",
      "data": [
          { <product_object> },
          { <product_object> },
          { <product_object> },
          ...
      ]
  }
  ``` 

### **GET /video/:id/comment**  
  Returns all comments for the specified video.
* **URL Params**  
  *Required:* id=[String] 
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
  **Code:** 200  
  **Content:** 
  ```
  {
      "message": "Success get data",
      "data": [
          { <comment_object> },
          { <comment_object> },
          { <comment_object> },
          ...
      ]
  }
  ``` 

### **POST /video/:id/comment**  
  Create new comment for the specified video.
* **URL Params**  
  *Required:* id=[String] 
* **Data Params**  
  ```
  {
    username: string,
    comment: string
  }
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
  **Code:** 200  
  **Content:** 
  ```
  {
      "message": "Success create comment"
  }
  ``` 

## How to Run Locally
1. Clone this repository
2. Run :
    ```
    npm run setup
    ```
3. Replace DATABASE_URL value in .env file with your MongoDB Connection URL
4.  Run :
    ```
    npm run seed
    ```
4.  Run :
    ```
    npm run dev
    ```
5. The API should now be running locally on http://localhost:3000


