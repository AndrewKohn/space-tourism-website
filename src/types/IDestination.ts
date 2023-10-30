interface IDestination {
  name: string;
  images: { png: string; webp: string };
  description: string;
  distance: string;
  travel: string;
}

export default IDestination;
