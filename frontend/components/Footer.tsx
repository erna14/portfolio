export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-10">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Erna Berbić. All rights reserved.
        </p>
      </div>
    </footer>
  );
}