/**
 *  实例化菜单组件
 *  @author fenghaiting@camera360.com
 *  @version 2016-1-8
 */

$.ns("c360.menu");

var ItemView = React.createClass({displayName: "ItemView",

        render:function(){

            var guidList = this.props.menu.guidList.map(function(item,index){
                return (React.createElement("li", {key: item.page+""+index},
                            React.createElement("a", {className: this.props.page == item.page?"hover menu-item":"menu-item", href: "#page_"+item.page+"?value="+item.showName},
                                React.createElement("em", null, "-"), item.showName
                            )
                        ))
            }.bind(this));

            return (React.createElement("ol", {ref: this.props.menu.page, className: this.props.menu.page + "ol" + (this.props.page.indexOf(this.props.menu.page) != -1?" onChoos":"")},
                        guidList
                    ))
        }
    });

var MenuView = React.createClass({displayName: "MenuView",

        /**
         *  操作菜单切换显示隐藏功能
         *  @param  event object 表示event事件对象
         *  @return 无
         */
        handlerMenuEvent:function(page,event){
            var target = $(event.currentTarget);
            target.toggleClass('onChoos');
            $('.'+page).toggleClass('onChoos');
        },

        render:function(){
            return (
                React.createElement("div", {className: "menu l"},
                    React.createElement("ul", null,

                            this.props.menuObject.menu.map(function(menu, index){
                                if(menu.bind == undefined){
                                    return (React.createElement("li", {key: menu.page},
                                                React.createElement("a", {className: this.props.menuObject.page == menu.page?"hover menu-item":"menu-item", href: "#page_"+menu.page+"?value="+menu.areaName},
                                                    React.createElement("span", null,
                                                        React.createElement("p", null, menu.areaName)
                                                    )
                                                )
                                            ))
                                }else{
                                    return (React.createElement("li", {key: menu.page},
                                                React.createElement("a", {onClick: this.handlerMenuEvent.bind(null,menu.page+'ol'), className: "more_icon " + menu.page + (this.props.menuObject.page.indexOf(menu.page) != -1?" onChoos":""), href: "javascript:void(0)"},
                                                    React.createElement("span", null,
                                                        React.createElement("p", null, menu.areaName)
                                                    )
                                                ),
                                                React.createElement(ItemView, {menu: menu, page: this.props.menuObject.page})
                                            ))
                                }
                            }.bind(this))

                    )
                )
            )
        }
    });

c360.menu = MenuView;