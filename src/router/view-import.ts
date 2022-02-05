const modules = import.meta.glob('../views/**/**.vue')

export const loadView = (path: string) => {
  return modules['../views/' + path + '.vue']
}
