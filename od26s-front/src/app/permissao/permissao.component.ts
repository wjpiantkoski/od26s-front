import {Component, OnInit, ViewChild} from '@angular/core';
import {Permissao} from '../model/permissao';
import {PermissaoService} from '../permissao/permissao.service';
import {ConfirmationService, Message, LazyLoadEvent} from 'primeng/api';
import {DataTable} from 'primeng/primeng';

@Component({
  selector: 'app-permissao',
  templateUrl: './permissao.component.html',
  styleUrls: ['./permissao.component.css']
})

export class PermissaoComponent implements OnInit {

  permissaoEdit: Permissao;
  permissoes: Array<Permissao>;
  totalRecords: number;
  maxRecords = 10;
  currentPage = 1;
  @ViewChild('dt') dataTable: DataTable;
  br: any;

  msgs: Array<Message>;
  showDialog = false;

  constructor(private permissaoService: PermissaoService,
              private confirmationService: ConfirmationService
  ) {
  }
  lazyLoad(event: LazyLoadEvent) {
    const pageNumber = event.first / event.rows;
    this.currentPage = pageNumber;

    this.maxRecords = event.rows;

    setTimeout( () => {
      this.findAllPaged(this.currentPage, this.maxRecords);
    }, 250);
  }

  findAllPaged(page: number, size: number) {
    this.permissaoService.findPageable(page, size).subscribe(e => {
      this.permissoes = e.content;
      this.totalRecords = e.totalElements;
    });
  }



  ngOnInit() {
    this.permissaoEdit = new Permissao();
    this.findAll();
  }

  findAll() {
    this.permissaoService.findAll().subscribe(items => {
      this.permissoes = items;
    });
  }


  newEntity() {
    this.showDialog = true;
    this.permissaoEdit = new Permissao();
    this.permissaoEdit = new Permissao();
  }

  openDialog(item: Permissao = new Permissao()) {
    this.permissaoEdit = Object.assign({}, item);
    this.showDialog = true;
  }

  save() {
    this.permissaoService.save(this.permissaoEdit).subscribe(e => {
        this.permissaoEdit = new Permissao();
        this.dataTable.reset();
        this.showDialog = false;