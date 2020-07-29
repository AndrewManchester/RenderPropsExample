# RenderPropsExample
Wanted to rework an online example to help understand
render props.
As final rework, of many, tried to encapsulate
the essence of what the program was executing in the
few lines where the render props are set up.

    //Using curry here
    const filterData = (source, fn) => (filterOn) => 
     filterItems(source, filterOn, fn)
  
    const App = () => (
     <div>
        <Location doesThisProp=''
              filterFunction={filterData(preload.data, makeString)}
              filterOnRender={(handler)=> <WithSearch  onChange={handler}/>}
              presentRender ={(aLocation)=><LocationCard location={aLocation}/>}
       />
     </div>
    )
