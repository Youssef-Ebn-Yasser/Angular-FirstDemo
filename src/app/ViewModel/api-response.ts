export interface ApiResponse {
  success:boolean,
  data:any,
  messages:string[],
  pageNumber?:number,
  totalPage?:number,
  itemsPerPage?:number
}
