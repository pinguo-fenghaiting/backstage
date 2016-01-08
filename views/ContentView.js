/**
 *  实例化页面
 *  @author fenghaiting@camera360.com
 *  @version 2016-1-8
 */

var ContentView = React.createClass({

        render:function(){
            return (
                <div className="content l">
                    <div className="mainContent">
                        <div id="carouselPage" className="page-manage carousel slide">
                            <div className="carousel-inner">
                                {
                                    this.props.menuObject.menu.map(function(menu,index){
                                        if(menu.bind == undefined){
                                            return (<div key={"page"+menu.page} id={"page"+menu.page+"View"} className={"item " + (this.props.menuObject.page == menu.page?"active":"")}>
                                                    </div>)
                                        }else{
                                            return menu.guidList.map(function(item,index){
                                                        return (<div key={"item"+item.page} id={"page"+item.page+"View"} className={"item " + (this.props.menuObject.page == item.page?"active":"")}>
                                                                </div>)
                                                    }.bind(this));
                                        }
                                    }.bind(this))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    });

module.exports = ContentView;