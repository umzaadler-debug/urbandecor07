import React, { useState } from 'react';
import { X, Calculator, ArrowRight, MessageSquare, Layers, HelpCircle } from 'lucide-react';
import { UrbanDecorLogo } from './UrbanDecorLogo';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToInquiry: (summary: string) => void;
}

export const WallcoveringCalculatorModal: React.FC<CalculatorModalProps> = ({
  isOpen,
  onClose,
  onProceedToInquiry,
}) => {
  const [unit, setUnit] = useState<'feet' | 'meters'>('feet');
  const [wallWidth, setWallWidth] = useState<number>(14);
  const [wallHeight, setWallHeight] = useState<number>(9);
  const [wallCount, setWallCount] = useState<number>(1);
  const [windowsCount, setWindowsCount] = useState<number>(1);
  const [doorsCount, setDoorsCount] = useState<number>(1);
  const [materialType, setMaterialType] = useState<'wallpaper' | 'wall-panels' | 'blinds'>('wallpaper');

  if (!isOpen) return null;

  // Conversion math
  const factorToSqFt = unit === 'feet' ? 1 : 10.7639;
  const factorToSqM = unit === 'feet' ? 0.092903 : 1;

  const rawArea = wallWidth * wallHeight * wallCount;
  const windowDeduction = windowsCount * (unit === 'feet' ? 15 : 1.4);
  const doorDeduction = doorsCount * (unit === 'feet' ? 20 : 1.85);

  const netArea = Math.max(0, rawArea - (materialType === 'blinds' ? 0 : windowDeduction + doorDeduction));
  const netAreaSqFt = netArea * factorToSqFt;
  const netAreaSqM = netArea * factorToSqM;

  // Standard European wallpaper roll covers ~5.3 sq meters (~57 sq ft), with 15% pattern match allowance
  const wallpaperRolls = Math.ceil((netAreaSqFt * 1.15) / 55);

  // Standard acoustic wall panel is 2.4m x 0.6m (~1.44 sq m / ~15.5 sq ft)
  const acousticPanels = Math.ceil(netAreaSqFt / 15.5);

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Urban Decor! I used your online estimator for ${materialType.toUpperCase()}: Dimensions ${wallWidth}x${wallHeight} ${unit} (${wallCount} walls). Net area: ~${netArea.toFixed(1)} ${unit}². Estimated ${
        materialType === 'wallpaper' ? `${wallpaperRolls} rolls` : materialType === 'wall-panels' ? `${acousticPanels} panels` : 'custom blinds'
      }. Please advise on quote & installation schedule.`
    );
    window.open(`https://wa.me/917303016646?text=${text}`, '_blank');
  };

  const handleProceed = () => {
    const summary = `${materialType.toUpperCase()}: ${wallWidth}x${wallHeight} ${unit}, ${wallCount} wall(s), Net: ${netArea.toFixed(1)} ${unit}² (${materialType === 'wallpaper' ? `${wallpaperRolls} rolls` : `${acousticPanels} panels`})`;
    onProceedToInquiry(summary);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#F8F5F0] rounded-lg shadow-2xl border border-[#ECE5DC] overflow-hidden max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#23211F] text-white flex items-center justify-between border-b border-[#383532]">
          <div className="flex items-center gap-3">
            <div className="bg-[#EAE2D8] px-2 py-1 rounded">
              <img src="/logo.svg" alt="URBAN DECOR" className="h-6 w-auto object-contain" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-serif font-semibold tracking-wide">
                Wallcovering &amp; Material Estimator
              </h3>
              <p className="text-xs text-[#ECE5DC]/70 font-light">Calculate rolls, panels, and coverage with zero waste</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {/* Unit Toggle & Material Selection */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center pb-4 border-b border-[#ECE5DC]">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7D634C]">Unit:</span>
              <div className="inline-flex rounded border border-[#ECE5DC] bg-white p-0.5 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setUnit('feet')}
                  className={`px-3 py-1 rounded cursor-pointer ${
                    unit === 'feet' ? 'bg-[#23211F] text-white' : 'text-[#6C6660]'
                  }`}
                >
                  Feet (ft)
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('meters')}
                  className={`px-3 py-1 rounded cursor-pointer ${
                    unit === 'meters' ? 'bg-[#23211F] text-white' : 'text-[#6C6660]'
                  }`}
                >
                  Meters (m)
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7D634C]">Material:</span>
              <div className="inline-flex rounded border border-[#ECE5DC] bg-white p-0.5 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setMaterialType('wallpaper')}
                  className={`px-2.5 py-1 rounded cursor-pointer ${
                    materialType === 'wallpaper' ? 'bg-[#7D634C] text-white' : 'text-[#6C6660]'
                  }`}
                >
                  Wallpapers
                </button>
                <button
                  type="button"
                  onClick={() => setMaterialType('wall-panels')}
                  className={`px-2.5 py-1 rounded cursor-pointer ${
                    materialType === 'wall-panels' ? 'bg-[#7D634C] text-white' : 'text-[#6C6660]'
                  }`}
                >
                  Wall Panels
                </button>
                <button
                  type="button"
                  onClick={() => setMaterialType('blinds')}
                  className={`px-2.5 py-1 rounded cursor-pointer ${
                    materialType === 'blinds' ? 'bg-[#7D634C] text-white' : 'text-[#6C6660]'
                  }`}
                >
                  Blinds
                </button>
              </div>
            </div>
          </div>

          {/* Dimension Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#23211F] mb-1">
                Wall Width ({unit})
              </label>
              <input
                type="number"
                min="1"
                step="0.5"
                value={wallWidth}
                onChange={(e) => setWallWidth(Math.max(1, parseFloat(e.target.value) || 0))}
                className="w-full px-3 py-2 bg-white border border-[#ECE5DC] rounded text-sm text-[#23211F] focus:outline-none focus:border-[#7D634C]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#23211F] mb-1">
                Wall Height ({unit})
              </label>
              <input
                type="number"
                min="1"
                step="0.5"
                value={wallHeight}
                onChange={(e) => setWallHeight(Math.max(1, parseFloat(e.target.value) || 0))}
                className="w-full px-3 py-2 bg-white border border-[#ECE5DC] rounded text-sm text-[#23211F] focus:outline-none focus:border-[#7D634C]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#23211F] mb-1">
                Number of Walls
              </label>
              <select
                value={wallCount}
                onChange={(e) => setWallCount(parseInt(e.target.value, 10))}
                className="w-full px-3 py-2 bg-white border border-[#ECE5DC] rounded text-sm text-[#23211F] focus:outline-none focus:border-[#7D634C]"
              >
                <option value="1">1 (Single Accent Wall)</option>
                <option value="2">2 Walls</option>
                <option value="3">3 Walls</option>
                <option value="4">4 Walls (Entire Room)</option>
              </select>
            </div>
          </div>

          {/* Deductions */}
          {materialType !== 'blinds' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#ECE5DC]/40 rounded border border-[#ECE5DC]">
              <div>
                <label className="block text-xs font-medium text-[#6C6660] mb-1">
                  Windows in Wall Area
                </label>
                <input
                  type="number"
                  min="0"
                  value={windowsCount}
                  onChange={(e) => setWindowsCount(Math.max(0, parseInt(e.target.value, 10) || 0))}
                  className="w-full px-3 py-1.5 bg-white border border-[#ECE5DC] rounded text-xs text-[#23211F]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#6C6660] mb-1">
                  Doors / Openings in Wall Area
                </label>
                <input
                  type="number"
                  min="0"
                  value={doorsCount}
                  onChange={(e) => setDoorsCount(Math.max(0, parseInt(e.target.value, 10) || 0))}
                  className="w-full px-3 py-1.5 bg-white border border-[#ECE5DC] rounded text-xs text-[#23211F]"
                />
              </div>
            </div>
          )}

          {/* Calculated Output Card */}
          <div className="bg-white p-6 rounded-lg border-2 border-[#7D634C]/40 shadow-sm">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7D634C] mb-4">
              Estimated Material &amp; Coverage
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-4 border-b border-[#ECE5DC]">
              <div>
                <span className="text-xs text-[#6C6660] font-light">Net Wall Coverage</span>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#23211F]">
                  {netArea.toFixed(1)} <span className="text-xs font-sans font-normal text-[#6C6660]">{unit}²</span>
                </p>
                <p className="text-[11px] text-[#6C6660]">~{netAreaSqM.toFixed(1)} m²</p>
              </div>

              <div>
                <span className="text-xs text-[#6C6660] font-light">
                  {materialType === 'wallpaper' ? 'Recommended Rolls' : materialType === 'wall-panels' ? 'Acoustic Panels' : 'Window Modules'}
                </span>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#7D634C]">
                  {materialType === 'wallpaper' ? `${wallpaperRolls} Rolls` : materialType === 'wall-panels' ? `${acousticPanels} Panels` : `${wallCount} Sets`}
                </p>
                <p className="text-[11px] text-[#6C6660]">Incl. pattern matching buffer</p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <span className="text-xs text-[#6C6660] font-light">Install Duration</span>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#23211F]">
                  {netAreaSqM < 25 ? '1 Day' : netAreaSqM < 60 ? '1–2 Days' : '2–3 Days'}
                </p>
                <p className="text-[11px] text-[#6C6660]">Certified Master Applicators</p>
              </div>
            </div>

            <p className="text-[11px] text-[#6C6660] pt-3 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-[#7D634C]" />
              <span>Estimates are based on standard roll sizes and include an automated 15% pattern alignment allowance.</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleShareWhatsApp}
              className="flex-1 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors rounded shadow flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Estimate to WhatsApp</span>
            </button>

            <button
              onClick={handleProceed}
              className="flex-1 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#23211F] text-white hover:bg-[#7D634C] transition-colors rounded shadow flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Quote with this Spec</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
