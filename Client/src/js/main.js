var React=require("react");
var ReactDom=require("react-dom");
var {hashHistory,Route,Router,IndexRoute}=require("react-router");
var Navbar=require("./component/Navbar");
var Add=require("./component/Add");
var List=require("./component/List");
var MainComponent=React.createClass({
render:function(){
  return(
    <div>
    <Navbar/>
<br/><br/>
{this.props.children}
    </div>
  );
}
});
ReactDom.render(
  <Router history={hashHistory}>
              <Route path="/" component={MainComponent}>
                <IndexRoute component={Add}/>
                <Route path="/add" component={Add}/>
                <Route path="/list" component={List}/>
                </Route>
  </Router>,document.getElementById("app"));
