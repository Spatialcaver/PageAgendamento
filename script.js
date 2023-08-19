

function agendar(){
Swal.fire({
    title: 'Confirmação de agendamento',
    text: 'Horario Agendado com sucesso',
    icon: 'success' ,// Define a duração em milissegundos (3 segundos neste exemplo)
    timer: 10000,
    showConfirmButton: false // Remove o botão de confirmação para que o alerta desapareça sozinho
  });

}

/*
function verificarData(){
    const data = new Date()
    const hoje = data.getDate()
    const agenda = document.getElementById('date')
    const hora = data.getHours()
    const horaAgend = document.getElementById('time')

    if (hoje >= dataInicio && agenda <= dataFim) {
        agendar(); // Chama a função agendar se a data e hora estiverem dentro do intervalo
    } else {
       Swal.fire(
        {
            title: 'Data invalida',
            text: 'Data ou horario invalidos',
            icon: 'error' ,// Define a duração em milissegundos (3 segundos neste exemplo)
            timer: 10000,
            showConfirmButton: false
                }
       );
    }
}*/

  
  
  
  
