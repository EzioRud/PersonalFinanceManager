# Personal Finance Manager

## Running the Project in Visual Studio Code

1. **Open the project:**
   - Launch Visual Studio Code
   - Go to `File > Open Folder`
   - Navigate to and select the folder containing this project

2. **Install dependencies:**
   - Open the integrated terminal in VS Code (`View > Terminal` or `Ctrl+```)
   - Run the following command:
     ```
     npm install
     ```

3. **Start the development server:**
   - In the same terminal, run:
     ```
     npm run dev
     ```

4. **View the application:**
   - Look for a message in the terminal that says something like:
     ```
     VITE v4.x.x  ready in xxx ms
     
     ➜  Local:   http://localhost:5173/
     ➜  Network: use --host to expose
     ➜  press h to show help
     ```
   - Ctrl+click the `http://localhost:5173/` link, or open a browser and navigate to this URL

5. **Making changes:**
   - Edit the files in the `src` folder
   - The browser will automatically reload to reflect your changes

6. **Stopping the server:**
   - To stop the development server, press `Ctrl+C` in the terminal

## Building for Production

To create a production build:

1. Run the build command:
   ```
   npm run build
   ```

2. The output will be in the `dist` folder, which you can then deploy to a web server.

## Linting

To run the linter:

```
npm run lint
```

This will check your code for any style issues or potential errors.
