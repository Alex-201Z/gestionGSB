export class Praticien {
  constructor(
    public imageUrl: string,
    public nom: string,
    public prenom: string,
    public adresse: string,
    public cp: string,
    public ville: string,
    public statut: string
  ) {}

  // Méthode pour modifier le statut
  onModificationStatut(): void {
    this.statut = this.statut === 'À visiter' ? 'Déjà visité' : 'À visiter';
  }
}


