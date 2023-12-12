# Website Template

This repository contains a simple website template built using Vite and React. It includes basic pages and components that users can customize to create their own unique website.
As well, you can customize the visual themes to your preference.

## Features

- **Vite + React**: Utilizes Vite for fast and efficient development along with React for building UI components.
- **Tailwind CSS**: Customisable and utility-first approach to styling your components
- **Pages**: Includes Home, About, and Showcase pages as starting templates.
- **Components**: A Navbar component is available for easy navigation.
- **Customization**: Users can modify content, styles, and themes to create a personalized website.

## File Structure

```plaintext
root directory
├── index.html         # Update website tab header and icon
├── /src
│   ├── App.jsx        # Manage pages and routes
│   ├── App.css        # Handle themes and styles
│   ├── /pages
│   │   ├── Home.jsx           # Homepage template
│   │   ├── About.jsx          # About page template
│   │   └── Showcase.jsx       # Showcase page template
│   └── /components
│       └── Navbar.jsx        # Navigation component
└── /public               # Image assets
    └── logo.png
```

## Getting Started

### Clone the Repository

To clone this repository, use the following command by copying and pasting it in a
terminal that you opened inside the folder where you want this stored:

        git clone https://github.com/Enjoyweaver/websiteTemplate.git

After it is downloaded, then paste this into the terminal:

        cd websiteTemplate

To install the necessary dependencies, run:

        npm install

This will install all the required packages and dependencies for the project. And once
it is finished, then you should open the project with VS Code using this command in your terminal:

        code .

## Tutorial

Once VS Code opens, these are the files you should see:

<p align="center">
  <img src="./public/files.png" alt="Logo">
</p>

### Browser Tab / Header

To update the browser tab header, go to the index.html file and type the name you want displayed.
And then add your image to the /public folder and update the name of the image. Once you completed your updates,
then press

```bash
ctrl + s
```

at the same time to save your changes and within a few seconds you should see the updates in your browser:

<p align="center">
  <img src="./public/tabHeader.png" alt="Logo">
</p>

### Update pages

To update your pages, navigate to the pages folder within your projects directory and select the file you want to update.
All three pages are similar, so the instructions below apply to each:

<p align="center">
  <img src="./public/pages.png" alt="Logo">
</p>

### Images and section width

In either of the three pages, in the light-blue circle is where you can update the logo or remove it completely.

<p align="center">
  <img src="./public/body.png" alt="Logo">
</p>

If you want to remove the image, then delete this section:

```bash
      <div className="w-1/3 text-center pl-10">
        <img src="logo.png" alt="Logo" />
      </div>
```

and then also delete the

```bash
w-2/3
```

as that is applying 2/3's of the page to the text below that is underlined in orange, and now it can take up the whole screen.
If you want to split the page evenly between the two sides, then put the image section at 1/2 and the text section below at 1/2 as well, or you can play around
with the layout and adjust it how you prefer.

### Text color and size

In the image above, the color of the text is underlined in yellow and the size of the text is underlined in red. You can adjust the colors
in the App.css page where it lists all of the colors for the themes.
