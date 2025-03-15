<template>
    <div class="page services-page">
      <h2>Our Services</h2>
      <p>We offer a wide range of services to meet your digital needs:</p>
      
      <div style="margin-top: 20px;">
        <div v-for="service in services" :key="service.id" class="service-card">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
      
      <div style="margin-top: 20px;">
        <button @click="$router.push('/contact')">Request a Service</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServicesPage',
    data() {
      return {
        services: [
          { 
            id: 1, 
            title: 'Web Development', 
            description: 'We create modern, responsive websites tailored to your specific needs.' 
          },
          { 
            id: 2, 
            title: 'App Development', 
            description: 'Native and cross-platform mobile applications for iOS and Android.' 
          },
          { 
            id: 3, 
            title: 'UI/UX Design', 
            description: 'User-centered design that enhances user experience and engagement.' 
          },
          { 
            id: 4, 
            title: 'Digital Marketing', 
            description: 'Strategic marketing to increase your online presence and reach.' 
          }
        ]
      }
    }
  }
  </script>
