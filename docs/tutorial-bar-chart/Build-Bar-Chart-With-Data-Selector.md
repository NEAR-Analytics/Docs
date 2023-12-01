---
sidebar_position: 2
---

# Bar Chart With Data Selector


In this tutorial, we'll go through the process of adding a date selector to a widget that fetches data from an API and displays it in a chart. The date selector allows users to filter the data based on predefined date ranges. Let's break down the example code into steps for better understanding.

## Step 1: Fetching Data

First, you're fetching data from an API using the `fetch` method. The API returns the latest data, which will be processed later.

```javascript
let raw_data = fetch("https://api.flipsidecrypto.com/api/v2/queries/f22d1d23-8993-45ea-9cbb-d27eba5b106d/data/latest", {
  subscribe: true,
  method: "GET",
  headers: {
    Accept: "*/*",
  },
});
```

## Step 2: Initializing State

You're initializing the state with a default date range selection and an empty array for raw data.

```javascript
const initialState = {
  selectedDateRange: "1Y",
  rawData: [],
};

state = State.init(initialState);
```

## Step 3: Date Range Selection

The `handleDateRangeChange` function updates the state with the selected date range. This function will be triggered when a user selects a different date range.

```javascript
const handleDateRangeChange = (range) => {
  State.update({
    selectedDateRange: range,
  });
};
```

## Step 4: Processing Data

The `processData` function filters and sorts the raw data based on the selected date range. It adjusts the start date according to the range and filters the data accordingly.

```javascript
const processData = (rawData, dateRange) => {
  // Logic to set startDate based on dateRange
  // Filter and sort rawData based on date range
};
```

## Step 5: Preparing Chart Data

You're mapping the processed data to prepare the datasets for the chart. Each dataset represents a different metric (e.g., POSTS\_COUNT, LIKES\_COUNT, REPLIES\_COUNT).

```javascript
const dataToDisplay = processData(state.rawData, state.selectedDateRange);

// Preparing datasets for the chart
// ...

const stacked_bar_data = {
  dates,
  datasets: [
    // Datasets for chart
  ],
};
```

## Step 6: Chart Configuration

Define the options for the chart, such as aspect ratio, interaction mode, legend display, and axis configuration.

```javascript
const stacked_options = {
  // Chart options...
};
```

## Step 7: Rendering the Widget

Finally, render the widget with the date selector buttons and the chart. The date selector buttons allow the user to change the date range, which updates the displayed data in the chart.

```javascript
return (
  <Style>
    <div className="relative text-bg-dark rounded-4 p-3 mb-4">
      {/* Date selector buttons */}
      {data !== null ? (
        <div>
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

* The date selector enhances user interactivity, allowing users to view data relevant to specific time frames.
* Ensure that the data processing correctly handles the date ranges and updates the chart accordingly.
* Styling and layout play an important role in making the widget user-friendly and visually appealing.

This widget, with the added functionality of a date selector, offers a dynamic way to visualize data over different time periods, which is particularly useful in analytics and reporting dashboards.
