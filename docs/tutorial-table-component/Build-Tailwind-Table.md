---
sidebar_position: 1
---

# Build a Table Component


This tutorial will guide you through creating a widget that displays a data table. This widget fetches data from an API and allows sorting, pagination, and formatting of the table cells. Let's break down the example code into steps for clarity.

## Step 1: Fetching Data

The first step involves fetching data from an API. The `fetch` call retrieves the latest data from the provided URL.

```javascript
let rawData = fetch("https://api.flipsidecrypto.com/api/v2/queries/9bfa85f4-7b2d-4219-b6b6-a08f5ed2880b/data/latest", {
  subscribe: true,
  method: "GET",
  headers: {
    Accept: "*/*",
  },
});
```

## Step 2: Initializing State

You're initializing the state for sorting configurations and the current page number for pagination.

```javascript
State.init({
  setSortConfig: { key: "", direction: "asc" },
  currentPage: 1,
});
```

## Step 3: Pagination and Sorting Functions

Define functions to handle pagination (`nextPage`, `previousPage`) and sorting (`getSortedNodes`, `sort_update`). These functions update the state and manipulate the data based on user interactions.

```javascript
function nextPage() {
  // Logic for the next page
}

function previousPage() {
  // Logic for the previous page
}

function sort_update(sortKey, direction) {
  // Update the sort state
}

function getSortedNodes() {
  // Logic for sorting nodes
}
```

## Step 4: Data Formatting

Create helper functions to format different types of data displayed in the table, such as percentages, numbers, or text.

```javascript
function formatPercentNew(text) {
  // Format percentages
}

function formatNumber(num) {
  // Format numbers
}

function formatText(text) {
  // Format text based on conditions
}
```

## Step 5: Defining Table Columns

Define the structure of the table columns, including labels and rendering logic for each cell.

```javascript
const COLUMNS = [
  {
    label: /* JSX for column label */,
    renderCell: (item) => formatNumber(item["COLUMN_NAME"]),
    sort: { sortKey: "COLUMN_NAME" },
  },
  // More columns...
];
```

## Step 6: Rendering the Table

Finally, render the table using a combination of HTML and React components. Include logic for sorting when clicking on column headers and pagination controls.

```javascript
return (
  <div className="bg-dark rounded-lg mb-12 overflow-hidden w-full">
    {/* Check if data is available and render the table */}
    {data !== null ? (
      <div /* Styles for table container */>
        <table /* Table element with dynamic rows and cells based on data */>
          {/* Table headers, body, and pagination controls */}
        </table>
      </div>
    ) : (
      <div className="text-white text-center p-4">Loading ...</div>
    )}
  </div>
);
```

## Key Points to Remember

* Ensure that the data fetching process handles errors and loading states.
* Sorting and pagination enhance the user experience in navigating through large data sets.
* Formatting functions are crucial for presenting data in a user-friendly way.
* React's state management is used to handle dynamic changes like sorting and page changes.

This widget provides a dynamic and interactive way to display and manipulate data in a table format, which is a common requirement in many web applications, including those built on blockchain technologies.
