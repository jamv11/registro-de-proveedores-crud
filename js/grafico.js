
export const grafico = parametro => {
    
   const ctx = document.querySelector('#myChart');
  const ctx2 = document.querySelector('#myChart2');
  const ctx3 = document.querySelector('#myChart3');
  const usuariosMod = JSON.parse(localStorage.getItem('usuariosModificados'));
  const usuariosDel = JSON.parse(localStorage.getItem('usuariosEliminados'));

  const chart =  new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Usuarios Creados','Usuarios Eliminados','Usuarios Modificados'],
        datasets: [{
          label: '',
          data: [parametro,usuariosDel,usuariosMod],
          borderWidth: 1,
          hoverOffset: 40

        }]
      },
      options: {
        plugins:{
          legend:{
            labels:{
                color: '#000000',
                pointStyle:'circle',
                boxWidth:15,
                boxHeight:20,
                font:{
                    size:25,
                    weight:'bold',
                    shadowColor:'rgba(0,0,0,0.0)',
                    shadowBlur: 0,
                    
                }
            }
          },
        }
      }
  }); 


}


