<template>
  <header>
    <nav>
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Nosotros</a>
        </li>
        <li>
          <a href="#">Acerca de</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "PxHeaderVue"
};
</script>

<style scoped>
header nav {
  background-color: darkred;
  height: 50px;
}
ul {
  display: flex;
  list-style: none;
  margin: 0;
  height: inherit;
  align-items: center;
}
ul li a {
  text-decoration: none;
  margin: 0px 16px;
  color: white;
}

ul li a:hover {
  font-weight: bold;
}
</style>