---
sidebar_position: 1
---

# Introduction

# This is an unofficial guide to understand the different moving parts of the BOS.


## Main Parts:

Creating applications on the blockchain operating system entails the collaboration of three distinct elements. If you're accustomed to a classic web infrastructure, you'll know it generally includes a backend that hosts the business logic and maintains a database, supplemented by a frontend.

In our configuration, this structure is streamlined by engaging the Protocol as both a data repository and a hosting environment for all business logic. This logic can be programmed in a variety of ways, such as through a smart contract or a frontend web component. When considering the frontend interface, we employ Gateways powered by a Virtual Machine. These tools allow us to access, retrieve, and interact with components recorded on the blockchain, and also to execute specific functions, ensuring the smooth operation of the logic.


Visual of Stack:

![BOS Diagram](/img/BOS-Diagram-Page.png)


The NEAR blockchain operating system, BOS, provides a set of APIs to allow your components to interact with different blockchains, websites, and store data in a decentralized way.

Here is a list:

- Social - the SocialDB API.
- State - the state updates API.
- Near - the NEAR API.
- Clipboard - the clipboard API.




## 1. Chain

The decentralized apps' source code is hosted on NEAR Blockchain, owing to its economical storage capability for HTML/CSS/JS, which costs merely a few cents.
These components have the ability to invoke functions across any blockchain, and currently support all EVM chains, such as Polygon and zkSync, in addition to NEAR.

The NEAR Protocol runs on nodes, some nodes known as validators , which generate blocks, and others are regular nodes that propagate data.
We are not required to understand how a node works, other than the idea that we will be interacting with the Blockchain to retreive components, read and write data through dedicated smart contracts and APIs.

### 1.1 Smart Contracts:

Smart contracts in the NEAR Protocol are programs that interact with the network. They are, however, not limited to being written in Rust. NEAR Protocol supports both Rust and AssemblyScript for writing smart contracts. These smart contracts use the protocol to facilitate various operations, such as token transfers, decentralized applications (dApps) interactions, and more within the NEAR network.

For the purpose of interacting and building the BOS, we will be utilizing at SocialDB. Not a requirement for us to understand, but mainly for transparency purposes and understanding our tech stack.

> SocialDB is a smart contract to store social data on NEAR protocol.
https://docs.near.org/social/contract


## 2. Components

While constructing a decentralized web application, we will leverage components written in JavaScript to communicate with the targeted blockchain, specifically NEAR in this instance. If you have prior experience with frontend frameworks akin to reactJS, you'll find these components have comparable characteristics. One component can be integrated within another, and in aggregate, they can be employed to establish a frontend-based web application.

Analogously, you can envision a component similar to a partial in frameworks like Ruby On Rails or Django. It represents a slice of the frontend of a web application that can be conditionally rendered and furnished with data and attributes.

The Blockchain Operating System facilitates the development of a decentralized frontend via the construction and assembly of miniature applications, referred to as Components. These Components are housed within the NEAR blockchain and run locally in a customized Virtual Machine, thereby ensuring they cannot access local storage or cookies.

> https://docs.near.org/bos/home



Snippet Example:

```





```


There are three types of components:




There are three categories of components:

### 2.1 Built-In Components:
These are fundamental units maintained by gateways. We'll delve into the specifics of these in the following sections.

In the Blockchain Operating System, you construct miniature applications, referred to as Components, each of which addresses a specific challenge. Subsequently, these Components are combined to assemble a fully functional frontend. The Blockchain Operating System offers a suite of ready-made, Built-In components to expedite the development of your decentralized frontend.


> https://docs.near.org/bos/components/home

### Non-Exhaustive List of Built-in Components:
- Widget: The minimum unit of a frontend.
- Markdown: Renders markdown text.
- IPFS Uploader: Uploads images into IPFS.
- OverlayTrigger: Renders Bootstrap's OverlayTrigger based on npm package react-bootstrap.
- InfiniteScroll - the component to render infinite scroll based on the npm package react-infinite-scroller.
- Typeahead - the component for text auto-complete and typeahead based on npm package react-bootstrap-typeahead.
- Files - the component to input files with drag and drop support based on npm package react-files.
- Tooltip - the component to render Bootstrap's tooltip based on npm package react-bootstrap.
- Radix UI - a complete set of Radix primitives to simplify UI development.
- styled - React's styled components.



### 2.2 Widget and iFrame Components:
These two kinds of components enable us to extend our development beyond Built-In components.

### Widgets:
A Widget is a customized component, based on JavaScript, which can be stored on the targeted blockchain, such as NEAR. Here's an example of a component that fetches data from a JSON API and displays it in a ReactJS Component.

The preconfigured Widget component permits the integration of an existing component into your codebase. This enhances the capability to create intricate applications by piecing together multiple components.

### iFrames:
The iFrame component endows us with the ability to incorporate external JS libraries and utilize them in tandem with the component.

Even though this might appear to be the ultimate solution for constructing a variety of complex web applications, we'll discuss a more efficient method to allow our Widgets to access libraries beyond the scope of Built-In components.

### 2.3 Custom Components:
Here, we introduce a few new concepts, but it's time to delve deeper into the Blockchain Operating System. Components can be incorporated into a gateway. Essentially, a gateway acts as a web application or browser that identifies and invokes a component and subsequently renders that component.


## 3. Gateways:

A gateway is an interface into the blockchain, it utilizes components of all sorts from built-in components into the gateway, custom widgets and javascript packages to invoke the NEAR APIs and SDK.

The gateway operates on a conventional HTTP server; it can run locally, but for production-level deployment and broader accessibility, it can also be hosted remotely.

Gateways make locally-run, decentralized front-ends available to the masses. Each gateway may contain a specially designed virtual machine that loads and runs frontends to access protocols built on Ethereum, L2s, and other Layer 1s like NEAR. The code for these frontends is stored on the NEAR blockchain.

Gateways provide a straightforward mechanism to render components anywhere.

Examples of gateways include near.org, near.social, nearatlas.com, and nearpad.dev.


Keep in mind, one of the key differences from traditional stack web applications here is that our web app components are stored outside the local codebase, the components reside within the blockchain. They are accesable through any Gateway that contains the right VM.


### 3.1 VM:

The NEAR Gateway VM is a type of virtual machine that executes the code of components. It offers a sandboxed environment for securely rendering components.

If you want to understand how to better use components, it would be beneficial to familiarize yourself with ReactJS and explore its tutorial.

Components are similar to React functional components, but they omit the function declaration.

The VM package is installed as a dependecy by the gateway to execute code in a safe and secure manner.
This VM will only permit the rendering of recognized components.

The VM offers a user-friendly API to fetch data from the SocialDB contract. There are six methods:

Social.get
Social.getr
Social.index
Social.keys
Social.set

Customizing Gateways and VMs:

Now that we understand the VM is a key package to run code and expand our decentralized web app.
We will extend our VM by installing a new dependecy, chartJS.
- import chartJS.js and define it as a react-js component
- then now the only STEP left is to make the VM aware that when we call BAR or CHART inside the Sandbox, it should refer to the chartJS.js react component.
- Voila! now that component will be available inside the Widget / Code Editor.