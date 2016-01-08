var MainAction = Reflux.createActions(['getMenuData','setPage','setSelectOpen','setProduct']);

var MainStore = Reflux.createStore({

    listenables:[MainAction],

    getInitialState:function(){

        return this.menuObject = {
            page:"SceneTemplate",
            name:"冯海庭",
            menu:[],
            selectOpen:false,
            products:{
                'camera360':'camera360',
                'bstore':'bstore',
                'bestie':'bestie'
            },
            product:'camera360'
        };
    },

    onGetMenuData:function(callback){
        this.menuObject.menu = [{
            appName:'camera360',
            areaName:'情景模版管理',
            bind: "bind",
            page: "SceneTemplate",
            type:1,
            guidList:[{
                name: "templateConfig",
                page: "SceneTemplateConfig",
                showName:'模版配置'
            },{
                name: "templateList",
                page: "SceneTemplateList",
                showName:'模版列表'
            },{
                name: "templateParameter",
                page: "SceneTemplateParameter",
                showName:'参数配置'
            }]
        },{
            appName:'camera360',
            areaName:'动态贴纸管理',
            bind: "bind",
            page: "DynamicSticker",
            type:2,
            guidList:[{
                name: "stickerConfig",
                page: "DynamicStickerConfig",
                showName:'贴纸配置'
            },{
                name: "stickerList",
                page: "DynamicStickerList",
                showName:'贴纸列表'
            }]
        }];
        this.trigger(this.menuObject);
        callback();
    },

    onSetProduct:function(product){
        this.menuObject.product = product;
        this.trigger(this.menuObject);
    },

    onSetSelectOpen:function(selectOpen){
        this.menuObject.selectOpen = selectOpen;
        this.trigger(this.menuObject);
    },

    onSetPage:function(page){
        this.menuObject.page = page;
        this.trigger(this.menuObject);
    }

});

module.exports = {
    MainAction:MainAction,
    MainStore:MainStore
};