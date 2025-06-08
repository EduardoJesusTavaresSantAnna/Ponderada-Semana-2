// Main JavaScript para o sistema de gestão hoteleira

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa componentes
    setupDeleteButtons();
    setupModals();
});

// Configuração dos botões de exclusão
function setupDeleteButtons() {
    const deleteButtons = document.querySelectorAll('.btn-delete');
    const modal = document.getElementById('delete-modal');
    const confirmBtn = document.getElementById('confirm-delete');
    const cancelBtn = document.getElementById('cancel-delete');
    
    if (!deleteButtons.length || !modal) return;
    
    let selectedId = null;
    
    // Ao clicar em qualquer botão de exclusão
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            selectedId = button.getAttribute('data-id');
            modal.style.display = 'block';
        });
    });
    
    // Configuração do botão de confirmação
    if (confirmBtn) {
        confirmBtn.addEventListener('click', async () => {
            if (!selectedId) return;
            
            try {
                const response = await fetch(`/api/quartos/${selectedId}`, {
                    method: 'DELETE',
                });
                
                if (response.ok) {
                    // Exclusão bem-sucedida, recarregar a página
                    window.location.reload();
                } else {
                    const error = await response.json();
                    alert(`Erro ao excluir: ${error.message || 'Ocorreu um erro'}`);
                }
            } catch (error) {
                console.error('Erro:', error);
                alert('Erro ao comunicar com o servidor');
            } finally {
                modal.style.display = 'none';
            }
        });
    }
    
    // Configuração do botão de cancelar
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            selectedId = null;
        });
    }
    
    // Fechar modal se clicar fora
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            selectedId = null;
        }
    });
}

// Configuração dos modais
function setupModals() {
    // Fecha qualquer modal se a tecla ESC for pressionada
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });
}

// Função utilitária para formatação de moeda
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}