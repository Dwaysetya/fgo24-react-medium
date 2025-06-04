## CREATE MEDIUM

This repository contains information on how to create a simple Medium website that focuses on displaying data based on click results using useparam, then the clicked data results are displayed on the next page using the path from react router dom.

## Preview

## Result

![Result](./src/assets/Screenshot%202025-05-19%20at%2023.57.35.png)
![Result](./src/assets/Screenshot%202025-05-19%20at%2023.58.21.png)

## How to Run this project

1. Clone this project

```
git clone   https://github.com/Dwaysetya/fgo24-react-medium
```

2. Enter the project firectory

```
cd fgo24-react-medium
```

3. Install the Depedencies

```
 npm i react-router-dom
```

4. Install the Depedencies

```
 npm install tailwindcss @tailwindcss/vite
```

5. Install the Depedencies

```
npm install
```

6. run the project

```
npm run dev
```

7. Project will running on (http://localhost:8088/)

## With Docker

1. Clone this project

```
git clone   https://github.com/Dwaysetya/fgo24-react-medium
```

2. Get into the path

```
cd fgo24-react-medium
```

3. Build image

```
docker build . -t medium:latest
```

4. Run image with docker
```
docker run -p 8088:80 -d medium:latest
```

## Depedencies

This project requires React.js to run, so make sure React.js is installed on your device.

- vite: used to document an HTTP server locally, easing the development and testing process.

## Basic Information

This project was developed as part of the learning program at Kodacademy Bootcamp Batch 24, which was carried out by Dwi Setyabudi in order to deepen the understanding and technical skills acquired during the training.
