import sys
import re
import os

def analyze_file(filepath):
    """Analyzes a single file for SEO issues."""
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return

    extension = os.path.splitext(filepath)[1]
    if extension not in ['.html', '.tsx', '.jsx', '.js', '.ts']:
        print(f"Unsupported file type: {extension}")
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    status = {
        'title': [],
        'description': [],
        'headings': {'h1': [], 'h2': [], 'h3': []},
        'images': [],
        'links': []
    }

    # Title check (Meta or Tag)
    title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
    if title_match:
        status['title'].append(title_match.group(1).strip())
    else:
        # Check for Next.js/React Metadata
        title_meta = re.search(r'title:\s*["\'](.*?)["\']', content)
        if title_meta:
            status['title'].append(title_meta.group(1).strip())

    # Meta Description check
    desc_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', content, re.IGNORECASE)
    if desc_match:
        status['description'].append(desc_match.group(1).strip())
    else:
        desc_meta = re.search(r'description:\s*["\'](.*?)["\']', content)
        if desc_meta:
            status['description'].append(desc_meta.group(1).strip())

    # Headings check
    for h in ['h1', 'h2', 'h3']:
        matches = re.findall(rf'<{h}[^>]*>(.*?)</{h}>', content, re.IGNORECASE | re.DOTALL)
        # Handle JSX components like <Heading variant="h1">
        jsx_matches = re.findall(rf'<[A-Za-z0-9.]+\s+[^>]*variant=["\']{h}["\'][^>]*>(.*?)</[A-Za-z0-9.]+>', content, re.IGNORECASE | re.DOTALL)
        status['headings'][h].extend([re.sub(r'<[^>]+>', '', m).strip() for m in matches + jsx_matches])

    # Images Alt Tags check
    img_matches = re.findall(r'<img\s+[^>]+>', content, re.IGNORECASE)
    for img in img_matches:
        alt = re.search(r'alt=["\'](.*?)["\']', img, re.IGNORECASE)
        if not alt:
            status['images'].append(('MISSING ALT', img))
        elif not alt.group(1).strip():
            status['images'].append(('EMPTY ALT', img))

    # Internal Links check
    links = re.findall(r'<a\s+[^>]+href=["\'](.*?)["\']', content, re.IGNORECASE)
    for link in links:
        if link.startswith('/') or 'daffodil' in link:
            status['links'].append(('INTERNAL', link))

    # Print results
    print(f"\n--- SEO Report for: {filepath} ---")
    
    # Title validation
    if not status['title']:
        print("[CRITICAL] Missing <title> tag or metadata.")
    else:
        for t in status['title']:
            length = len(t)
            print(f"[OK] Title: '{t}' ({length} chars)")
            if length < 50 or length > 60:
                print(f"    [WARN] Title length {length} is not optimized (target: 50-60).")

    # Meta description validation
    if not status['description']:
        print("[CRITICAL] Missing meta description.")
    else:
        for d in status['description']:
            length = len(d)
            print(f"[OK] Description: '{d}' ({length} chars)")
            if length < 150 or length > 160:
                print(f"    [WARN] Description length {length} is not optimized (target: 150-160).")

    # Headings validation
    h1s = status['headings']['h1']
    if len(h1s) == 0:
        print("[CRITICAL] No H1 heading found.")
    elif len(h1s) > 1:
        print(f"[CRITICAL] Found {len(h1s)} H1 headings (only one allowed).")
    else:
        print(f"[OK] H1: '{h1s[0]}'")

    # Image validation
    missing_alts = [i for i in status['images'] if i[0] == 'MISSING ALT']
    if missing_alts:
        print(f"[WARN] Found {len(missing_alts)} images without ALT tags.")

    print(f"Found {len(status['headings']['h2'])} H2s and {len(status['headings']['h3'])} H3s.")
    print("-" * 40)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python seo_scanner.py <filepath>")
    else:
        analyze_file(sys.argv[1])
