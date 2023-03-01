<template>
  <header class="header">
    <div class="left">
      <p class="title">一体化平台</p>
      <ul class="over-list">
        <li class="over-li">总览</li>
        <li class="over-li">
          云产品
          <font-awesome-icon class="icon" icon="fa-solid fa-angle-down" />
        </li>
      </ul>
      <ul class="item-list">
        <li class="item-li">云服务器</li>
        <li class="item-li">域名服务</li>
        <li class="item-li">网站备案</li>
        <li class="item-li">
          <font-awesome-icon icon="fa-solid fa-ellipsis" />
        </li>
        <li class="item-li"><font-awesome-icon icon="fa-solid fa-plus" /></li>
      </ul>
    </div>
    <div class="right">
      <ul class="message-list">
        <li class="message-li">
          <font-awesome-icon icon="fa-solid fa-qrcode" />
        </li>
        <li class="message-li">
          <font-awesome-icon icon="fa-solid fa-envelope" />
          <div class="message-radius">16</div>
        </li>
        <li class="message-li">帮助</li>
        <li class="message-li">
          工单<font-awesome-icon class="icon" icon="fa-solid fa-angle-down" />
        </li>
        <li class="message-li">
          费用<font-awesome-icon class="icon" icon="fa-solid fa-angle-down" />
        </li>
      </ul>
      <div class="head-div">
        <img
          class="head-img"
          src="https://i.ibb.co/FJGtc8J/user-normal.png"
          alt=""
        />
        <span class="head-name">GithubCloudV5Githu11111</span>
        <font-awesome-icon class="icon" icon="fa-solid fa-angle-down" />
      </div>
    </div>
  </header>
</template>
<style lang="less" scoped>
.header {
  display: flex;
  height: 64px;
  background-color: #262f3e;
  justify-content: space-between;
  padding: 10px 20px;
  .icon {
    margin-left: 5px;
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 14px;
    .title {
      display: flex;
      color: white;
      font-family: auto;
      font-size: large;
      font-style: normal;
      font-weight: 600;
    }
    .over-list {
      list-style: none;
      display: flex;
      .over-li {
        color: #c1c6c8;
        padding: 0 15px;
      }
    }
    .item-list {
      list-style: none;
      display: flex;
      .item-li {
        padding-left: 25px;
        color: #c1c6c8;
        display: flex;
        align-items: center;
        &:nth-child(1) {
          border-left: 1px solid #c1c6c8;
        }
      }
    }
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 14px;
    .message-list {
      display: flex;
      list-style: none;
      .message-li {
        padding: 0 20px;
        color: #c1c6c8;
        display: flex;
        align-items: center;
        position: relative;
        .message-radius {
          width: 30px;
          height: 20px;
          // border-radius: 50% / 100% 0 0;
          border-radius: 50px;
          background-color: blue;
          position: absolute;
          top: -5px;
          right: -5px;
          line-height: 20px;
        }
      }
    }
    .head-div {
      display: flex;
      align-items: center;
      color: #c1c6c8;
      margin-top: -14px;
      .head-img {
        display: block;
        width: 25px;
        height: 25px;
      }
      .head-name {
        display: block;
        margin-left: 10px;
        width: 147px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
