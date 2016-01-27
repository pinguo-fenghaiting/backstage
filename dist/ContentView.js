(function(window){
    /**
     *  实例化页面
     *  @author fenghaiting@camera360.com
     *  @version 2016-1-8
     */

    $.ns("c360.content");

    var ContentView = React.createClass({displayName: "ContentView",

            render:function(){
                return (
                    React.createElement("div", {className: "content l"},
                        React.createElement("div", {className: "mainContent"},
                            React.createElement("div", {id: "carouselPage", className: "page-manage carousel slide"},
                                React.createElement("div", {className: "carousel-inner"},

                                        this.props.menuObject.menu.map(function(menu,index){
                                            if(menu.bind == undefined){
                                                return (React.createElement("div", {key: "page"+menu.page, id: "page"+menu.page+"View", className: "item " + (this.props.menuObject.page == menu.page?"active":"")}
                                                        ))
                                            }else{
                                                return menu.guidList.map(function(item,index){
                                                            return (React.createElement("div", {key: "item"+item.page, id: "page"+item.page+"View", className: "item " + (this.props.menuObject.page == item.page?"active":"")}
                                                                    ))
                                                        }.bind(this));
                                            }
                                        }.bind(this))
                                    )
                                )
                            )
                        )
                    )
                }
            });

    c360.content = ContentView;
})(window)