
<template>
    <div class="page home-page">
      <h2>Welcome to Han Cheng's Website</h2>
      <p>This is the home page of our Vue.js website with routing.</p>
      <p>Feel free to navigate through the different pages using the navigation bar above.</p>
      
      <div style="margin-top: 20px;">
        <h3>Featured Content</h3>
        <p>Here's some of our featured content that you might be interested in:</p>
        <ul style="margin-left: 20px; margin-top: 10px;">
          <li>Latest news and updates</li>
          <li>Featured products and services</li>
          <li>Upcoming events and promotions</li>
        </ul>
      </div>
      
      <div style="margin-top: 20px;">
        <button @click="$router.push('/services')">Explore Our Services</button>
        <button @click="$router.push('/contact')">Contact Us</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>