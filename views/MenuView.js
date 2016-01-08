/**
 *  实例化菜单组件
 *  @author fenghaiting@camera360.com
 *  @version 2016-1-8
 */

var ItemView = React.createClass({

        render:function(){

            var guidList = this.props.menu.guidList.map(function(item,index){
                return (<li key={item.page+""+index}>
                            <a className={this.props.page == item.page?"hover menu-item":"menu-item"} href={"#page_"+item.page+"?value="+item.showName} >
                                <em>-</em>{item.showName}
                            </a>
                        </li>)
            }.bind(this));

            return (<ol ref={this.props.menu.page} className={this.props.menu.page + "ol" + (this.props.page.indexOf(this.props.menu.page) != -1?" onChoos":"")}>
                        {guidList}
                    </ol>)
        }
    });

var MenuView = React.createClass({

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
                <div className="menu l">
                    <ul>
                        {
                            this.props.menuObject.menu.map(function(menu, index){
                                if(menu.bind == undefined){
                                    return (<li key={menu.page}>
                                                <a className={this.props.menuObject.page == menu.page?"hover menu-item":"menu-item"} href={"#page_"+menu.page+"?value="+menu.areaName}>
                                                    <span>
                                                        <p>{menu.areaName}</p>
                                                    </span>
                                                </a>
                                            </li>)
                                }else{
                                    return (<li key={menu.page}>
                                                <a onClick={this.handlerMenuEvent.bind(null,menu.page+'ol')} className={"more_icon " + menu.page + (this.props.menuObject.page.indexOf(menu.page) != -1?" onChoos":"")} href="javascript:void(0)">
                                                    <span>
                                                        <p>{menu.areaName}</p>
                                                    </span>
                                                </a>
                                                <ItemView menu={menu} page={this.props.menuObject.page} />
                                            </li>)
                                }
                            }.bind(this))
                        }
                    </ul>
                </div>
            )
        }
    });

module.exports = MenuView;