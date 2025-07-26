// src/services/webhook.service.ts

export const handlePaymentNotification = (paymentData: any) => {
  const { action, data } = paymentData;

  // Esto es lo que Mercado Pago envía
  console.log("Acción:", action);
  console.log("ID del pago:", data.id);

  // Acá podrías buscar el estado real del pago con Mercado Pago si querés
  // o actualizar tu base de datos

  // Simulación:
  if (action === 'payment.created') {
    console.log('Nuevo pago creado');
  } else if (action === 'payment.updated') {
    console.log('Pago actualizado');
  }

  return { success: true };
};
