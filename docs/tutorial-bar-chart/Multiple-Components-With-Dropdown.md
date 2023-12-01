---
sidebar_position: 5
---

# Build Multiple Components With Dropdown

In this tutorial, you will learn how to create a widget that dynamically loads different components based on a user's selection from a dropdown menu. This functionality is particularly useful for creating interactive dashboards where users can choose what data or visualizations they want to see. Let's break down the example code into steps.

## Step 1: Initializing State

The widget's initial state is set up with a `selectedWidget` property. This state determines which widget to display based on the user's selection.

```javascript
const initialState = {
  selectedWidget: "A", // "A" for MonthlyActiveAcounts, "B" for MainChainActiveAcounts
};

State.init(initialState);
```

## Step 2: Dropdown Change Handler

The `handleDropdownChange` function updates the `selectedWidget` in the state when the user selects a different option in the dropdown menu.

```javascript
const handleDropdownChange = (e) => {
  State.update({ selectedWidget: e.target.value });
};
```

## Step 3: Rendering the Dropdown and Widgets

In the return statement, you render a dropdown menu that allows the user to select between two widgets. The `value` of the dropdown is bound to `state.selectedWidget`, ensuring that it reflects the current selection.

The conditional rendering (`{state.selectedWidget === "A" ? ... : ...}`) decides which `Widget` component to display based on the value of `selectedWidget`. Each widget corresponds to a different data visualization or functionality, as indicated by their `src` attributes.

```javascript
return (
  <Style>
    <div className="bg-dark container rounded-4 p-3 mb-4">
      {/* Dropdown menu for selecting the widget */}
      <select
        id="widget-dropdown"
        value={state.selectedWidget}
        onChange={handleDropdownChange}
        // Dropdown styling
      >
        <option value="A">Daily Active Addresses</option>
        <option value="B">Daily Transactions</option>
      </select>

      {/* Conditional rendering of widgets */}
      {state.selectedWidget === "A" ? (
        <Widget src="y3k.near/widget/near_atlas.components.artemis.ChainComparison.DAA" props={{}} />
      ) : (
        <Widget src="y3k.near/widget/near_atlas.components.artemis.ChainCompariosn.DT" props={{}} />
      )}
    </div>
  </Style>
);
```

## Key Points to Remember

* State management is crucial for handling user interactions and updating the UI accordingly.
* Conditional rendering in React allows you to display different components based on the current state.
* Ensure that the widget sources (`src` attributes) correctly point to the respective components you wish to display.
* This pattern of using a dropdown to control which component is rendered can be extended to any number of widgets or components, making it a versatile approach for interactive UIs.

By following these steps, you can create an interactive and user-friendly widget that allows users to choose between different data visualizations or functionalities, enhancing the overall user experience in your application.
