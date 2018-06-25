<template>
    <div class="layout">
        <Layout>
            <Header>
               
                    <div class="layout-logo">管理系统</div>
                    <div class="layout-nav">
                         <ul>
                             <router-link tag="li"  v-for="(item,index) in routerList" :to="item.path" :key="index">
                                 <Icon :type="item.icon"></Icon>
                                    {{item.name}}
                             </router-link>
                         </ul>
                    </div>
               
            </Header>
            <Content :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>BACK</BreadcrumbItem>
                    <BreadcrumbItem>{{routerName}}</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="min-height: 200px;">
                        <router-view></router-view>
                    </div>
                </Card>
            </Content>
            <Footer class="layout-footer-center">2018-06-08 &copy; 程学明</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                routerList: [
                    {
                        name: "首页",
                        path: "backHome",
                        icon: "ios-navigate"
                    },
                    {
                        name: "添加文章",
                        path: "addArticle",
                        icon: "ios-keypad"
                    },
                    {
                        name: "文章列表",
                        path: "backArticleList",
                        icon: "ios-analytics"
                    },
                    {
                        name: "评论列表",
                        path: "commentList",
                        icon: "ios-paper"
                    }
                ],
                routerName: "后台首页"
            }
        },
         watch: {  
            $route(to, from) {  
                this.routerName = to.name;
            } 
         }
    }
</script>
<style scoped lang="scss">
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    text-align: center;
    line-height: 30px;
    color: aqua;
}
.layout-nav{
    width: 480px;
    height: 64px;
    margin: 0 auto;
    margin-right: 20px;
    >ul{
        width: 100%;
        overflow: auto;
        >li{
            float: left;
            padding: 0 20px;
            color: #fff;
            cursor: pointer;
        }
        >.router-link-active{
            color: aqua;
        }
    }
}
.layout-footer-center{
    text-align: center;
}
</style>
