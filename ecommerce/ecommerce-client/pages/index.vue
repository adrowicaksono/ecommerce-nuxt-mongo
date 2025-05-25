<template>
  <section class="sectionIndex">
    <div class="container">
      <div v-for="(i, idx) in items" v-bind:key="{ idx }" class="content">
        <Card v-bind:item="i" @addToCart="addToCart" />
      </div>
    </div>
  </section>
</template>

<script setup>

definePageMeta({
  layout: 'main'
})

const items = ref([])

onMounted(() => {
  const item = {
    img: 'https://media-www.canadiantire.ca/product/seasonal-gardening/backyard-fun/pool-fun/0810158/beach-ball-16--13b11c85-4ed6-4a8e-bfd6-02d1c31b40af-jpgrendition.jpg?impolicy=mZoom',
    name: 'ball',
    alt: 'ball-alt',
    price: 5000
  }

  for (let i = 0; i < 100; i++) {
    items.value.push(item)
  }
})

function addToCart(item) {
  console.log({ item }, item.name)
}
</script>

<style>
.sectionIndex {
  width: 100%;
  margin: 0;

}

.container {
  /* border-style: solid; */
  /* border-color: red; */
  margin-top: 5px;
  margin-bottom: 2px;
  margin-left: 10px;
  margin-right: 20px;

  background-color: rgba(255, 254, 254, 0.945);
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;
  width: 98%;
  flex-flow: row wrap;
  padding: 2px;
  border-radius: 5px;
  box-shadow: 2px 2px rgba(126, 119, 119, 0.753);
}

.content {
  display: flex;
  /* border-style: solid;
  border-color:red; */
  /* height: 50vh; */
  width: 23%;
  align-items: flex-start;
  margin-top: 3px;
  margin-bottom: 1px;
  margin-left: 1px;
  overflow: hidden;
  /* margin-bottom:-99px; */
}

.content:hover {
  border: 0.3px solid rgb(2, 94, 94);
  padding-bottom: 2px;
  margin-right: 0px;
  box-shadow: 2px 2px rgba(126, 119, 119, 0.753);
}
</style>
