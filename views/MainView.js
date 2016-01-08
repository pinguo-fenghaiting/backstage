/**
 *  初始化主视图
 *  @author fenghaiting@camera360.com
 *  @version 2016-1-8
 */

var Route = require('./AppRoute.js');

var AppRoute = Route.AppRoute;

var defaultRoute = Route.defaultRoute;

var TopView = require('./TopView.js');

var MenuView = require('./MenuView.js');

var ContentView = require('./ContentView.js');

var Action = require('./MainAction.js');

var MainStore = Action.MainStore;

var MainAction = Action.MainAction;

var LoadView = require('../components/load/LoadView.js');

var MainView = React.createClass({

    mixins:[Reflux.connect(MainStore, 'menuObject')],

    componentDidMount:function(){
        MainAction.getMenuData(this.initRoute);
    },

    initRoute:function(){
        if(location.hash == ""){
            defaultRoute("SceneTemplateConfig");
        }
        AppRoute.init();
    },

    render:function(){

        var mainStyle = {
            width:$(window).width()-214,
            minHeight:$(window).height()-130
        };

        return (
                <div className="index" onClick={this.handlerSelectEvent}>
                    <LoadView  />
                    <TopView  {...this.state}/>
                    <div className="main"  style={mainStyle}>
                        <MenuView  {...this.state}/>
                        <ContentView {...this.state}/>
                    </div>
                </div>
            );
    },

    handlerSelectEvent:function(event){
        MainAction.setSelectOpen(false);
    }
})

module.exports = MainView;
