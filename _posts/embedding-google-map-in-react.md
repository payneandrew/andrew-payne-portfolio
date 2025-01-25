---
title: "How to Embed Google Maps into Your React Application"
excerpt: "Learn step-by-step how to integrate Google Maps into your React application using @react-google-maps/api."
coverImage: "/maps-blog-cover-image.jpg"
date: "2025-01-25T05:35:07.322Z"
author:
  name: Andrew Payne
  picture: "/andrew-payne-headshot.JPG"
ogImage:
  url: "/maps-blog-cover-image.jpg"
---

Embedding Google Maps into a React application can be a seamless experience with the help of the `@react-google-maps/api` library. In this guide, we’ll walk through the process of integrating Google Maps step by step.

## Step 1: Set Up Your Google Cloud Project

1. Visit the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing project.
3. Navigate to **APIs & Services > Library** and enable the **Maps JavaScript API**.
4. Go to **APIs & Services > Credentials** and create an API key.
5. (Optional) Restrict your API key for added security by specifying your domain.

## Step 2: Install Dependencies

In your React project, install the `@react-google-maps/api` package:

```bash
npm install @react-google-maps/api
```

or

```bash
yarn add @react-google-maps/api
```

## Step 3: Environment Variables

Store your API key in an environment variable for security. Create a `.env` file in the root of your project:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

Make sure to restart your development server after adding the environment variable.

## Step 4: Create a Map Component

Here’s how to build a reusable `MapContainer` component. This will give you a basic map in your react app.

```tsx
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export const MapContainer: React.FC = () => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={11}
        center={{ lat: 37.7749, lng: -122.4194 }}
      />
    </LoadScript>
  );
};
```

### Key Features of the `MapContainer` Component

- **Center**: Where you want your map to start when its first loaded. Currently it is set to San Francisco.
- **Zoom Level**: Adjust the zoom level using the `zoom` prop.
- **Responsive Map**: The `mapStyles` object ensures a responsive map size. Customize this to your liking

  ![Google Maps Screenshot](/google-map-screenshot.png)

## Step 5: Adding markers

Adding markers can be helpful for highlighting significant locations. To add markers, you will use the `Marker` component from `@react-google-maps/api`. Create a prop called markerPositions. This will be an array of markers that you can pass into your component and will show up on the map.

```tsx
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface MarkerPosition {
  lat: number;
  lng: number;
  label?: string;
}

interface MapContainerProps {
  markerPositions: MarkerPosition[];
}

export const MapContainer: React.FC<MapContainerProps> = ({
  markerPositions,
}) => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={11}
        center={markerPositions[0]}
      >
        {markerPositions.map((position, index) => (
          <Marker key={index} position={position} label={position.label} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};
```

- **Center**: The center is now the first item in the markerPosition array.
- **Mapping Through Markers**: By mapping over the `markerPositions` array, we are now displaying all of the markers that are specified in the prop.
- **Label**: Passing in a label allows you to give the location a name.

  ![Google Maps Screenshot Marker](/google-map-screenshot-marker.png)

## Step 6: Use the Map Component

Import and use the `MapContainer` component in your application:

```tsx
import React from "react";
import MapContainer from "./MapContainer";

const App: React.FC = () => {
  const markerPositions = [
    { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
    { lat: 34.0522, lng: -118.2437, label: "Los Angeles" },
  ];

  return (
    <div>
      <h1>My Google Map</h1>
      <MapContainer markerPositions={markerPositions} />
    </div>
  );
};

export default App;
```

## Step 7: Test Your Application

Run your application to ensure the map displays correctly:

```bash
npm start
```

or

```bash
yarn dev
```

You should see a Google Map with markers for the specified locations.

## Bonus Tips

- **Styling the Map**: Customize the map appearance by adjusting the `mapContainerStyle` or using map themes.
- **Handling Errors**: Implement error handling for invalid API keys or network issues.
- **Advanced Features**: Explore additional features like info windows, custom markers, and map events using the `@react-google-maps/api` documentation.

With these steps, you now have a fully functional Google Map embedded in your React application. Happy coding!
