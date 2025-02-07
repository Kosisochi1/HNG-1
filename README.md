# Number Classification API

### Overview

Number Classification API provides structured data in JSON format. It provides the properties of integers like pirme ,odd even
etc.

### Features

- Returns responses in JSON format

- Supports simple GET requests

- Provides integer properties in JSON Format

### Installation

Before you begin, ensure you have **Node.js** installed.


Clone the repository:

```
git clone https://github.com/Kosisochi1/HNG-1
cd project-name
```


#### Installation dependencies:

```
npm install
```


### API Endpoints


| Http Method | Endpoint  | URL
--  ----------------------------------
| GET         |Base URL         |https://hng-1-gxdz.onrender.com
| GET         |Number API    |https://hng-1-gxdz.onrender.com/api/classify-number?number=-4



### Query Parameter 

It takes Number as query parameter.


#### Data Response

```
{
  "number": "-4",
  "is_prime": "false",
  "is_perfect": "false",
  "properties": [
    "not an armstrong",
    "Even"
  ],
  "digit_sum": "0",
  "fun_fact": "-4 is an uninteresting number."
}
``` 


#### Non-integer Response


```
{
  "number": "alphabet",
  "error": true
}


```
    
    
  

#### Usage

To use this API, simply send a GET request on tool like postman

### HNG Node js




### Contact
For enquiry contact ezeoyiri92@gmail.com
