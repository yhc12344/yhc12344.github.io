
<template>
    <div class="page contact-page">
      <h2>Contact Us</h2>
      <p>Have questions or want to work with us? Send us a message!</p>
      
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        
        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" id="subject" v-model="formData.subject" required>
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="formData.message" rows="5" required></textarea>
        </div>
        
        <button type="submit">Send Message</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
      }
    },
    methods: {
      submitForm() {
        alert('Form submitted!\n\nName: ' + this.formData.name + 
              '\nEmail: ' + this.formData.email + 
              '\nSubject: ' + this.formData.subject + 
              '\nMessage: ' + this.formData.message);
        
        // Reset form after submission
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      }
    }
  }
  </script>