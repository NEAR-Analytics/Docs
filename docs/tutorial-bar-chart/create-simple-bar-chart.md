---
sidebar_position: 1
---

# Create a Simple Bar Chart



This tutorial will guide you through creating a widget using the `BarEl` built-in component to display a bar chart. This widget fetches data from an API and visualizes it in a stacked bar chart format. We'll break down the example code into several steps for clarity.

## Step 1: Fetching Data

First, you're fetching data from an API using the `fetch` method. The `fetch` call is made to the provided URL, and it retrieves the latest data.

```javascript
let raw_data = fetch("https://api.flipsidecrypto.com/api/v2/queries/84e3bf99-a78b-4a0e-97af-e9af193ce868/data/latest", {
  subscribe: true,
  method: "GET",
  headers: {
    Accept: "*/*",
  },
});
```

## Step 2: Preparing the Data

After fetching the data, you're processing it to be used in the chart:

1. **Sorting Data:** The data is sorted based on the `FULL_DATE` field.
2. **Data Mapping:** You're mapping the `COMMITS_COUNT` from the data to a new object `COMMITS_COUNT` and extracting dates.

```javascript
const sortedData = data.sort((a, b) => {
  return new Date(a["FULL_DATE"]) - new Date(b["FULL_DATE"]);
});

const COMMITS_COUNT = {};
data.map((entry) => {
  COMMITS_COUNT[entry["FULL_DATE"]] = entry["COMMITS_COUNT"];
});

const dates = data.map((entry) => entry["FULL_DATE"]);
```

## Step 3: Chart Configuration

You're defining the options for the bar chart (`stacked_options`) and the data structure for the chart (`stacked_bar_data`). These include aspects like axis color, gridline color, and the dataset for the chart.

```javascript
const stacked_options = {
  // Chart options...
};

const stacked_bar_data = {
  dates,
  datasets: [
    {
      label: "COMMITS_COUNT",
      data: COMMITS_COUNT,
      backgroundColor: "rgb(250,164,58)",
    },
  ],
};
```

## Step 4: Rendering the Chart

Finally, you render the chart using the `BarEl` component. The `BarEl` component is passed the `options` and `data` you've defined above. There's also a conditional rendering to display a loading message if the data is not yet available.

```javascript
return (
  <Style>
    <div className="text-bg-dark container">
      {data !== null ? (
        <div className="rounded-4 p-3 mb-4">
          <BarEl options={stacked_options} data={stacked_bar_data} />
        </div>
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  </Style>
);
```

## Key Points to Remember

* Ensure the data fetching process is efficient and handles errors.
* Pay attention to the chart configuration to reflect the correct visualization of the data.
* Conditional rendering is essential to handle cases where data might not be immediately available.

This widget provides a dynamic way to visualize data fetched from an API, offering a clear example of how data can be processed and displayed in a user-friendly format using React components in blockchain environments.
