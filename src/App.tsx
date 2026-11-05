import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PUBLIC_LIBRARY_ENABLED } from './config/features';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { LibraryPage } from './pages/LibraryPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { OpenSourcePage } from './pages/OpenSourcePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ResourcePage } from './pages/ResourcePage';
import { TermsPage } from './pages/TermsPage';
import { VoiceStudioPage } from './pages/VoiceStudioPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="open-source" element={<OpenSourcePage />} />
        <Route path="open-source/voicestudio" element={<VoiceStudioPage />} />
        {PUBLIC_LIBRARY_ENABLED ? (
          <>
            <Route path="library" element={<LibraryPage />} />
            <Route path="library/skills" element={<LibraryPage category="skills" />} />
            <Route path="library/prompts" element={<LibraryPage category="prompts" />} />
            <Route path="library/templates" element={<LibraryPage category="templates" />} />
            <Route path="resources/:slug" element={<ResourcePage />} />
          </>
        ) : null}
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
