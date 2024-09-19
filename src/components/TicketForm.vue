<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white rounded-lg p-6 w-full max-w-lg relative">
        <button
          @click="$emit('close')"
          class="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h2 class="text-xl font-bold mb-4">Comprar Tickets para {{ movie.title }}</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label class="block text-gray-700">Cantidad de Entradas</label>
            <input type="number" v-model.number="form.quantity" min="1" required
              class="w-full px-3 py-2 border rounded" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Ubicación</label>
            <input type="text" v-model="form.location" required class="w-full px-3 py-2 border rounded" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Nombre del Cliente</label>
            <input type="text" v-model="form.name" required class="w-full px-3 py-2 border rounded" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Correo Electrónico</label>
            <input type="email" v-model="form.email" required class="w-full px-3 py-2 border rounded" />
          </div>
          <div class="flex justify-end">
            <button type="button" @click="$emit('close')"
              class="mr-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Cancelar
            </button>
            <button type="submit"
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Comprar
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import jsPDF from 'jspdf';
  import 'jspdf-autotable';
  import { addSale } from '../services/firebase';
  
  export default {
    name: 'TicketForm',
    props: {
      movie: {
        type: Object,
        required: true,
      },
    },
    emits: ['close', 'submit'],
    setup(props, { emit }) {
      const form = ref({
        quantity: 1,
        location: '',
        name: '',
        email: '',
      });
  
      const submitForm = async () => {
        const saleData = {
          ...form.value,
          movie: props.movie,
          saleDate: new Date(),
        };
  
        // Generar PDF
        generatePDF(saleData);
  
        // Almacenar la venta en Firestore
        try {
          await addSale(saleData);
        } catch (error) {
          console.error('Error almacenando la venta:', error);
        }
  
        emit('submit', saleData);
        emit('close'); 
      };
  
      const generatePDF = (data) => {
        const doc = new jsPDF();
  
        doc.setFontSize(18);
        doc.text('Factura de Compra de Tickets', 14, 22);
  
        doc.setFontSize(12);
        doc.text(`Fecha de Venta: ${data.saleDate.toLocaleString()}`, 14, 32);
        doc.text(`Nombre del Cliente: ${data.name}`, 14, 40);
        doc.text(`Correo Electrónico: ${data.email}`, 14, 48);
        doc.text(`Película: ${data.movie.title}`, 14, 56);
        doc.text(`Fecha y Hora de la Película: ${data.movie.releaseDate} - ${data.movie.runtime}`, 14, 64);
        doc.text(`Cantidad de Entradas: ${data.quantity}`, 14, 72);
        doc.text(`Ubicación: ${data.location}`, 14, 80);
        doc.text(`Monto Pagado: $${data.quantity * 30000} COP`, 14, 88); // Asumiendo $30,000 COP por ticket
  
        doc.save(`Factura_${data.name}_${data.saleDate.getTime()}.pdf`);
      };
  
      return {
        form,
        submitForm,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  </style>
  