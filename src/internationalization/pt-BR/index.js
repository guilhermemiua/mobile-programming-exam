export default {
  error: 'Erro',
  fieldsUnfilled: 'Campos não preenchidos',
  cancel: 'Cancelar',
  confirm: 'Confirmar',
  login: {
    password: 'Senha',
    submit: 'Login',
    noAccount: 'Não possui uma conta?',
    register: 'Cadastro',
  },
  register: {
    password: 'Senha',
    submit: 'Cadastrar',
    hasAccount: 'Já possui uma conta?',
  },
  unauthenticatedRoutes: {
    register: 'Cadastro',
  },
  authenticatedRoutes: {
    books: 'Livros',
    newBook: 'Novo Livro',
    updateBook: 'Editar Livro',
    genres: 'Gêneros',
    newGenre: 'Novo Gênero',
    updateGenre: 'Editar Gênero',
    settings: 'Configurações',
    about: 'Sobre',
    changeLanguage: 'Alterar Idioma',
  },
  books: {
    newBook: {
      title: 'Título',
      text: 'Texto',
      submit: 'Adicionar Livro',
    },
    updateBook: {
      title: 'Título',
      text: 'Texto',
      submit: 'Editar Livro',
    },
  },
  genres: {
    newGenre: {
      name: 'Nome',
      submit: 'Adicionar Gênero',
    },
    updateGenre: {
      name: 'Nome',
      submit: 'Atualizar Gênero',
    },
  },
  aboutPage: {
    text1: 'Neste aplicativo você pode gerenciar seus livros!',
    text2: 'Para gerenciar os livros, vá para home -> livros',
    text3: 'Para gerenciar os gêneros dos livros, vá para home -> gêneros',
    text4: 'Aproveite',
    author: 'Criado por Guilherme Eiti',
  },
  changeLanguage: {
    submit: 'Alterar Idioma',
  },
  // Components
  bookList: {
    book: {
      deleteTitle: 'Você tem certeza?',
      deleteText: 'Não será possível recuperar este livro',
    },
  },
  genreList: {
    genre: {
      deleteTitle: 'Você tem certeza?',
      deleteText: 'Não será possível recuperar este gênero',
    },
  },
  homeMenu: {
    books: 'Livros',
    bookGenres: 'Gêneros dos livros',
    settings: 'Configurações',
  },
  picker: {
    firstLabel: 'Por favor selecione uma opção...',
  },
  settingsMenu: {
    changeLanguage: 'Alterar Idioma',
    about: 'Sobre',
  },
  // reducers
  reducers: {
    auth: {
      logoutError: 'Logout erro',
      loginError: 'Email ou senha incorreta',
      verifyAuthenticationError: 'Erro na verificação de autenticação',
    },
    genres: {
      fetchGenresError: 'Erro na busca dos gêneros',
      addGenreError: 'Erro na adição do gênero',
      updateGenreError: 'Erro na edição do gênero',
      deleteGenreError: 'Error na remoção do gênero',
      existingBookError: 'Existe um livro com este gênero',
    },
    books: {
      fetchBooksError: 'Erro na busca dos livros',
      addBookError: 'Erro na adição do livro',
      updateBookError: 'Erro na edição do livro',
      deleteBookError: 'Error na remoção livro',
    },
  },
};
