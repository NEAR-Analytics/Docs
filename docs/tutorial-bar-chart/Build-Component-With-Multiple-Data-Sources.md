---
sidebar_position: 3
---

# Component With Multiple Data Sources



In this example, you are creating an advanced widget that involves fetching data from multiple sources, processing it, and then displaying it in a line chart with a date range selector. This kind of widget is particularly useful for comparative data visualization across different datasets. Let's break down the example code into steps for better understanding.

## Step 1: Defining Data Sources

The `query_url_obj` array contains objects defining the names of the datasets and their corresponding API URLs. Each dataset represents a different blockchain (e.g., Avalanche, Ethereum, NEAR, etc.).

```javascript
let query_url_obj = [
  // Array of objects with 'name' and 'url_address'
];
```

## Step 2: Fetching Data

The code iterates over the `query_url_obj` array, fetches data from each URL, and stores it in the `resultObject` with a key representing the name of the dataset and the type of data (DAU in this case).

```javascript
query_url_obj.forEach((item) => {
  // Fetch data for each item and process it
});
```

## Step 3: Initializing State

The state is initialized with a selected date range and a placeholder for the raw data.

```javascript
const initialState = {
  selectedDateRange: "1Y",
  _raw_data: [],
};

state = State.init(initialState);
```

## Step 4: Handling Date Range Selection

The `handleDateRangeChange` function updates the state with the new selected date range when a user selects a different option.

```javascript
const handleDateRangeChange = (range) => {
  State.update({
    selectedDateRange: range,
  });
};
```

## Step 5: Processing Data

The `processData` function filters the raw data based on the selected date range and assigns a color to each dataset for the chart.

```javascript
const processData = (dataObjects, dateRange) => {
  // Logic to filter and sort data based on date range
};
```

## Step 6: Preparing Chart Data

The code prepares the data for the line chart, including labels, data points, and colors.

```javascript
const dataSetsInfo = processData(state._raw_data, state.selectedDateRange);

const stacked_bar_data = {
  datasets: [],
};

// Logic to prepare datasets for the chart
```

## Step 7: Chart Configuration

The `stacked_options` object defines the configuration for the line chart, including aspects like aspect ratio, legend, and scales.

```javascript
const stacked_options = {
  // Configuration for the chart
};
```

## Step 8: Rendering the Widget

Finally, the widget is rendered with date range selection buttons and the line chart.

```javascript
return (
  <Style>
    <div className="relative text-bg-dark rounded-4 p-3 mb-4">
      {/* Date range selection buttons */}
      {/* Conditional rendering of the LineEl component with the prepared data */}
    </div>
  </Style>
);
```

## Key Points to Remember

* Fetching and processing data from multiple sources can be complex, so make sure to handle errors and loading states.
* The date range selector adds interactivity to your chart, allowing users to view data for specific periods.
* Assigning different colors to each dataset helps distinguish them in the chart.
* Ensure the chart is responsive and visually appealing for better user experience.

This widget, with its capability to fetch and display data from multiple sources in a line chart with a date range selector, offers a dynamic and comprehensive way to visualize and compare data, which is extremely valuable in analytics and reporting applications.
