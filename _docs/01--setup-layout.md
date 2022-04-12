# Layout 
In order to write an common layout for all the app create a layout folder into the components folder.
Create the layout.js and the sideBar for instance.
Use them on the page files as follows:

```javascript
PageComponentXXX.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
```
in this way current page is loaded into the general layout.
