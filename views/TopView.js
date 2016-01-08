/**
 *  实例化头部组件
 *  @author fenghaiting@camera360.com
 *  @version 2016-1-8
 */

var MainAction = require('./MainAction.js').MainAction;

var TopView = React.createClass({

        render:function(){

            var liArr = (function() {

                var obj = this.props.menuObject.products,
                    tempArr = [];

                for (var key in obj) {
                    tempArr.push(<li key={key} className={this.props.menuObject.product == key ? "over" : ""} onClick={this.handlerDropselistboxEvent}>{obj[key]}</li>)
                }

                return tempArr;

            }.bind(this))();

            return (<div className="top">
                    <div className="header">
                        <div className="logo">
                            <b>
                                <a href="javascript:void(0)">
                                    <img className="logo-img" src="resource/images/icon-logo.png" title="Camera360" />
                                </a>
                            </b>
                        </div>
                        <div className="nav r">
                            <div className="username">
                                <span className="users">
                                    <img src="resource/images/icon-user-name.png" />
                                    <a href="javascript:void(0)">
                                        {this.props.menuObject.name}
                                    </a>
                                </span>|
                                <span>
                                    <a className="logout" href={"https://i.camera360.com/oalogin.html?action=logout&redirectUrl=http://"+window.location.host}></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="toptitle">
                        <div className="l">
                            <span>
                                <strong>
                                    <a href="javascript:void(0)">产品中心</a>
                                </strong>
                                <img src="resource/images/icon-right-cor.png" />
                            </span>
                            <div className="topSelect l selects relative" onClick={this.handlerSelectEvent}>
                                <div>
                                    <p>{this.props.menuObject.product}<i></i></p>
                                </div>
                                <ul className={this.props.menuObject.selectOpen ? 'active dropselistbox' : 'dropselistbox'}>
                                    {liArr}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>)
        },

        /****************************************
                     event handlers
        ****************************************/

        /**
         *  操作头部菜单显示隐藏功能
         *  @param  event object 表示event事件对象
         *  @return 无
         */
        handlerSelectEvent:function(event){
            event.stopPropagation();

            MainAction.setSelectOpen(!this.props.menuObject.selectOpen);
        },

        /**
         *  操作头部菜单显示隐藏功能
         *  @param  event object 表示event事件对象
         *  @return 无
         */
        handlerDropselistboxEvent:function(event){
            var target = $(event.currentTarget),

                value = target.text();

            MainAction.setProduct(value);
        }
    });

module.exports = TopView;