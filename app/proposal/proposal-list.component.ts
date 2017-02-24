import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'SHT', 'http://diabnext.com/', 'Ruby on Rails', 150, 120, 15, 'louis0911317399@gmail.com')
  proposalTwo: Proposal = new Proposal(99, 'Google', 'http://google.com/', 'Python', 100, 220, 55, 'louis0911317399@gmail.com')
  proposalThree: Proposal = new Proposal(5, 'Yahoo', 'http://tw.yahoo.com/', 'Java', 250, 320, 35, 'louis0911317399@gmail.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}
